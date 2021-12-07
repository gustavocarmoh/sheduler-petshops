"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Product_1 = __importDefault(require("../entities/Product"));
var ProductsRepository = /** @class */ (function () {
    function ProductsRepository() {
        this.ormRepository = (0, typeorm_1.getRepository)(Product_1.default);
    }
    ProductsRepository.prototype.create = function (_a) {
        var name = _a.name, price = _a.price, quantity = _a.quantity;
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        product = this.ormRepository.create({
                            name: name,
                            price: price,
                            quantity: quantity,
                        });
                        return [4 /*yield*/, this.ormRepository.save(product)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsRepository.prototype.findByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var findProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.findOne({ where: { name: name } })];
                    case 1:
                        findProduct = _a.sent();
                        return [2 /*return*/, findProduct];
                }
            });
        });
    };
    ProductsRepository.prototype.findAllById = function (products) {
        return __awaiter(this, void 0, void 0, function () {
            var searchedProducts;
            return __generator(this, function (_a) {
                searchedProducts = this.ormRepository.find({
                    where: { id: (0, typeorm_1.In)(products.map(function (product) { return product.id; })) },
                });
                return [2 /*return*/, searchedProducts];
            });
        });
    };
    ProductsRepository.prototype.updateQuantity = function (products) {
        return __awaiter(this, void 0, void 0, function () {
            var searchedProducts, productsForUpdate, updatedProducts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepository.find({
                            where: {
                                id: (0, typeorm_1.In)(products.map(function (product) { return product.id; })),
                            },
                        })];
                    case 1:
                        searchedProducts = _a.sent();
                        return [4 /*yield*/, typeorm_1.PromiseUtils.runInSequence(searchedProducts, function (product) { return __awaiter(_this, void 0, void 0, function () {
                                var productIndex;
                                return __generator(this, function (_a) {
                                    productIndex = products.findIndex(function (findProduct) { return findProduct.id === product.id; });
                                    Object.assign(product, {
                                        quantity: product.quantity - products[productIndex].quantity,
                                    });
                                    return [2 /*return*/, product];
                                });
                            }); })];
                    case 2:
                        productsForUpdate = _a.sent();
                        return [4 /*yield*/, this.ormRepository.save(productsForUpdate)];
                    case 3:
                        updatedProducts = _a.sent();
                        return [2 /*return*/, updatedProducts];
                }
            });
        });
    };
    return ProductsRepository;
}());
exports.default = ProductsRepository;
