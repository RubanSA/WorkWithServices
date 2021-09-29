import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";
import { Optional } from "@angular/core";
@Injectable()
export default class DataService{
    constructor(@Optional() private logger: LoggingService){}

    items: string[] = ["iPhone 12 Max", "Xiaomi Mi 11", "Samsung Galaxy S12"];
    getData(): string[]{
        if(this.logger)
            this.logger.write("Операция получения данных!");
        return this.items;
    }

    addItem(item: string)
    {
        this.items.push(item);
        if(this.logger)
        this.logger.write("Операция добавления данных!");
    }
}