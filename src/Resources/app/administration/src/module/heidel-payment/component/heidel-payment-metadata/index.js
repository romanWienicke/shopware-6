import template from './heidel-payment-metadata.html.twig';

const { Component } = Shopware;

Component.register('heidel-payment-metadata', {
    template,

    props: {
        paymentResource: {
            type: Object,
            required: true
        }
    },

    computed: {
        data: function () {
            const data = [];

            this.paymentResource.metadata.forEach((meta) => {
                data.push({
                    key: meta.key,
                    value: meta.value
                });
            });

            return data;
        },

        columns: function () {
            return [
                {
                    property: 'key',
                    label: this.$tc('heidel-payment.paymentDetails.metadata.column.key'),
                    rawData: true
                },
                {
                    property: 'value',
                    label: this.$tc('heidel-payment.paymentDetails.metadata.column.value'),
                    rawData: true
                }
            ];
        }
    }
});
