import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { APP_ID_RANDOM_PROVIDER } from './application_tokens';
import { IterableDiffers, defaultIterableDiffers, KeyValueDiffers, defaultKeyValueDiffers } from './change_detection/change_detection';
import { ResolvedMetadataCache } from 'angular2/src/core/linker/resolved_metadata_cache';
import { AppViewManager } from './linker/view_manager';
import { AppViewManager_ } from "./linker/view_manager";
import { ViewResolver } from './linker/view_resolver';
import { AppViewListener } from './linker/view_listener';
import { DirectiveResolver } from './linker/directive_resolver';
import { PipeResolver } from './linker/pipe_resolver';
import { Compiler } from './linker/compiler';
import { Compiler_ } from "./linker/compiler";
import { DynamicComponentLoader } from './linker/dynamic_component_loader';
import { DynamicComponentLoader_ } from "./linker/dynamic_component_loader";
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
export const APPLICATION_COMMON_PROVIDERS = CONST_EXPR([
    new Provider(Compiler, { useClass: Compiler_ }),
    APP_ID_RANDOM_PROVIDER,
    ResolvedMetadataCache,
    new Provider(AppViewManager, { useClass: AppViewManager_ }),
    AppViewListener,
    ViewResolver,
    new Provider(IterableDiffers, { useValue: defaultIterableDiffers }),
    new Provider(KeyValueDiffers, { useValue: defaultKeyValueDiffers }),
    DirectiveResolver,
    PipeResolver,
    new Provider(DynamicComponentLoader, { useClass: DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBTyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDbEQsRUFBVSxRQUFRLEVBQXdCLE1BQU0sc0JBQXNCO09BQ3RFLEVBR0wsc0JBQXNCLEVBQ3ZCLE1BQU0sc0JBQXNCO09BQ3RCLEVBQ0wsZUFBZSxFQUNmLHNCQUFzQixFQUN0QixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3ZCLE1BQU0scUNBQXFDO09BQ3JDLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxrREFBa0Q7T0FDL0UsRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUI7T0FDN0MsRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUI7T0FDOUMsRUFBQyxZQUFZLEVBQUMsTUFBTSx3QkFBd0I7T0FDNUMsRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0I7T0FDL0MsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QjtPQUN0RCxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QjtPQUM1QyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQjtPQUNuQyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQjtPQUNwQyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sbUNBQW1DO09BQ2pFLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUM7QUFFekU7OztHQUdHO0FBQ0gsYUFBYSw0QkFBNEIsR0FBbUMsVUFBVSxDQUFDO0lBQ3JGLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztJQUM3QyxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUMsQ0FBQztJQUN6RCxlQUFlO0lBQ2YsWUFBWTtJQUNaLElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0lBQ2pFLElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0lBQ2pFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osSUFBSSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQztDQUMxRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3Byb3ZpZGUsIFByb3ZpZGVyLCBJbmplY3RvciwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7XG4gIEFQUF9DT01QT05FTlRfUkVGX1BST01JU0UsXG4gIEFQUF9DT01QT05FTlQsXG4gIEFQUF9JRF9SQU5ET01fUFJPVklERVJcbn0gZnJvbSAnLi9hcHBsaWNhdGlvbl90b2tlbnMnO1xuaW1wb3J0IHtcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBkZWZhdWx0SXRlcmFibGVEaWZmZXJzLFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIGRlZmF1bHRLZXlWYWx1ZURpZmZlcnNcbn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtSZXNvbHZlZE1ldGFkYXRhQ2FjaGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9yZXNvbHZlZF9tZXRhZGF0YV9jYWNoZSc7XG5pbXBvcnQge0FwcFZpZXdNYW5hZ2VyfSBmcm9tICcuL2xpbmtlci92aWV3X21hbmFnZXInO1xuaW1wb3J0IHtBcHBWaWV3TWFuYWdlcl99IGZyb20gXCIuL2xpbmtlci92aWV3X21hbmFnZXJcIjtcbmltcG9ydCB7Vmlld1Jlc29sdmVyfSBmcm9tICcuL2xpbmtlci92aWV3X3Jlc29sdmVyJztcbmltcG9ydCB7QXBwVmlld0xpc3RlbmVyfSBmcm9tICcuL2xpbmtlci92aWV3X2xpc3RlbmVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJy4vbGlua2VyL2RpcmVjdGl2ZV9yZXNvbHZlcic7XG5pbXBvcnQge1BpcGVSZXNvbHZlcn0gZnJvbSAnLi9saW5rZXIvcGlwZV9yZXNvbHZlcic7XG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tICcuL2xpbmtlci9jb21waWxlcic7XG5pbXBvcnQge0NvbXBpbGVyX30gZnJvbSBcIi4vbGlua2VyL2NvbXBpbGVyXCI7XG5pbXBvcnQge0R5bmFtaWNDb21wb25lbnRMb2FkZXJ9IGZyb20gJy4vbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlcic7XG5pbXBvcnQge0R5bmFtaWNDb21wb25lbnRMb2FkZXJffSBmcm9tIFwiLi9saW5rZXIvZHluYW1pY19jb21wb25lbnRfbG9hZGVyXCI7XG5cbi8qKlxuICogQSBkZWZhdWx0IHNldCBvZiBwcm92aWRlcnMgd2hpY2ggc2hvdWxkIGJlIGluY2x1ZGVkIGluIGFueSBBbmd1bGFyXG4gKiBhcHBsaWNhdGlvbiwgcmVnYXJkbGVzcyBvZiB0aGUgcGxhdGZvcm0gaXQgcnVucyBvbnRvLlxuICovXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUzogQXJyYXk8VHlwZSB8IFByb3ZpZGVyIHwgYW55W10+ID0gQ09OU1RfRVhQUihbXG4gIG5ldyBQcm92aWRlcihDb21waWxlciwge3VzZUNsYXNzOiBDb21waWxlcl99KSxcbiAgQVBQX0lEX1JBTkRPTV9QUk9WSURFUixcbiAgUmVzb2x2ZWRNZXRhZGF0YUNhY2hlLFxuICBuZXcgUHJvdmlkZXIoQXBwVmlld01hbmFnZXIsIHt1c2VDbGFzczogQXBwVmlld01hbmFnZXJffSksXG4gIEFwcFZpZXdMaXN0ZW5lcixcbiAgVmlld1Jlc29sdmVyLFxuICBuZXcgUHJvdmlkZXIoSXRlcmFibGVEaWZmZXJzLCB7dXNlVmFsdWU6IGRlZmF1bHRJdGVyYWJsZURpZmZlcnN9KSxcbiAgbmV3IFByb3ZpZGVyKEtleVZhbHVlRGlmZmVycywge3VzZVZhbHVlOiBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzfSksXG4gIERpcmVjdGl2ZVJlc29sdmVyLFxuICBQaXBlUmVzb2x2ZXIsXG4gIG5ldyBQcm92aWRlcihEeW5hbWljQ29tcG9uZW50TG9hZGVyLCB7dXNlQ2xhc3M6IER5bmFtaWNDb21wb25lbnRMb2FkZXJffSlcbl0pOyJdfQ==