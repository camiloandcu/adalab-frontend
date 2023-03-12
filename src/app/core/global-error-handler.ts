import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core'

import { ErrorService } from './services/error.service';
import { LoggerService } from './services/logger.service';
import { NotificationService } from './services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
    
    // El Error Handling es importante y necesita ser cargado primero
    // Por esta razón, inyectamos 'manualmente' los servicios con Injector
    constructor(private injector: Injector) {}
    
    handleError(error: Error | HttpErrorResponse): void {
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggerService);
        const notifier = this.injector.get(NotificationService);

        let message;

        if(error instanceof HttpErrorResponse) {
            // Error por parte de Servidor
            message = errorService.getServerMessage(error);
            notifier.showError(message);
        } else {
            // Error por parte de Client
            message = errorService.getClientMessage(error);
            notifier.showError(message);
        }

        logger.error(message);
    }

}
