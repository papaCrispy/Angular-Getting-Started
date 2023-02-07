import { Component, Input, Output, OnChanges, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    cropWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string>;

    /**
     *
     */
    constructor() {
        this.cropWidth = 75;
        this.rating = 3.2;
        this.ratingClicked = new EventEmitter<string>();
    }

    ngOnChanges(): void{
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} has been clicked!`);
    }

}