import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigService } from './infrastructure/config/environment-config/environment-config.service';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [EnvironmentConfigModule, EnvironmentConfigModule, TypeormModule],
  controllers: [AppController],
  providers: [AppService, EnvironmentConfigService, EnvironmentConfigService],
})
export class AppModule {}
