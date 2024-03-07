import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Observable, map } from "rxjs";

export class ResponseFormat<TData> {
    data: TData;

    @ApiProperty()
    isArray: boolean;
    @ApiProperty()
    path: string;
    @ApiProperty()
    duration: string;
    @ApiProperty()
    method: string;
}

@Injectable()
export class ResponseInterceptor<TData> 
    implements NestInterceptor<TData, ResponseFormat<TData>> {
    intercept(context: ExecutionContext, next: CallHandler<TData>)
        : Observable<ResponseFormat<TData>> 
        | Promise<Observable<ResponseFormat<TData>>> {
            const now = Date.now();
            const httpContext = context.switchToHttp();
            const request = httpContext.getRequest();

            return next.handle().pipe(
                map(data => ({
                    data,
                    isArray: Array.isArray(data),
                    path: request.path,
                    duration: `${Date.now() - now}ms`,
                    method: request.met
                }))
            );
    }
}