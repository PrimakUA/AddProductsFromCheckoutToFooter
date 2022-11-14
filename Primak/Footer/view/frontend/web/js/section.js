define([
    'uiComponent',
    'ko',
    'Magento_Customer/js/customer-data'
], function (uiComponent, ko, customerData) {
    'use strict';
    return uiComponent.extend({
        initialize: function () {
            this._super();
            this.cart = customerData.get('cart');
            this.productName = ko.computed(function () {
                this.exist = false;
                let products = [];
                if (this.cart().items) {
                    Object.values(this.cart().items).forEach(val => {
                        products.push('In cart ' + val['qty'] + ' qty - ' + val['product_name']);
                        this.exist = true;
                    });
                }
                return products;
            }, this, {pure: true});
        },
    });
});
