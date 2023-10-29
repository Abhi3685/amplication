import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PluginVersionModuleBase } from "./base/pluginVersion.module.base";
import { PluginVersionService } from "./pluginVersion.service";
import { PluginVersionResolver } from "./pluginVersion.resolver";

@Module({
  imports: [PluginVersionModuleBase, forwardRef(() => AuthModule)],
  providers: [PluginVersionService, PluginVersionResolver],
  exports: [PluginVersionService],
})
export class PluginVersionModule {}
