import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "../../../auth/types/backenderrors.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl:'./backendErrorMessages.component.html',
    standalone: true,
    imports: [CommonModule]
})

export class backendErrorMessages implements OnInit{
    @Input() backendErrors: BackendErrorsInterface = {}

    errorMessages: string[] = []

    ngOnInit(): void{
        this.errorMessages = Object.keys(this.backendErrors).map((name:string) => {
            const messages = this.backendErrors[name].join(' ')
            return `${name} ${messages}`;
        });

    }

}
