import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "吐司1", "面包类", "吐司1（面包类）", 28),
        new Product(2, "吐司2", "面包类", "吐司1（面包类）", 38),
        new Product(2, "红糖馒头1", "馒头类", "红糖馒头（馒头类）", 18),
        new Product(2, "红糖馒头2", "馒头类", "红糖馒头2（馒头类）", 19.8),
        new Product(3, "巧克力饼干1", "甜品类", "巧克力饼干1 (甜品类)", 28),
        new Product(3, "巧克力饼干2", "甜品类", "巧克力饼干2 (甜品类)", 28),];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return Observable.from([order]);
    }
}
