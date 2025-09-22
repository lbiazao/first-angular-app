import { Component, Input } from '@angular/core';

@Component({
    selector: "app-tasks",
    standalone: true,
    imports: [],
    templateUrl: "tasks.html",
    styleUrl: "tasks.css"
})

export class TasksComponent{
    @Input() name?: string;
}