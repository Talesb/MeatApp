import { EventEmitter } from "@angular/core";

export class NotificationService {
    notifier = new EventEmitter<String>();

    notify(message: string) {
        this.notifier.emit(message);
    }
}