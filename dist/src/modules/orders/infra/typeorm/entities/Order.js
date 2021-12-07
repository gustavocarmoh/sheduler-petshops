"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("@modules/users/infra/typeorm/entities/User"));
var OrdersProducts_1 = __importDefault(require("@modules/orders/infra/typeorm/entities/OrdersProducts"));
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.default; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
        __metadata("design:type", User_1.default)
    ], Order.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return OrdersProducts_1.default; }, function (ordersProducts) { return ordersProducts.order; }, {
            cascade: true,
            eager: true,
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "order_products", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ select: false }),
        __metadata("design:type", Date)
    ], Order.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ select: false }),
        __metadata("design:type", Date)
    ], Order.prototype, "updated_at", void 0);
    Order = __decorate([
        (0, typeorm_1.Entity)('orders')
    ], Order);
    return Order;
}());
exports.default = Order;
