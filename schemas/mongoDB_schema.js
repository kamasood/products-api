import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [
    {
      feature: String,
      value: String
    }
  ],
  styles: [
    {
      style_id: Number,
      name: String,
      original_price: Number,
      sale_price: Number,
      default_style: Boolean,
      photos: [
        {
          thumbnail_url: String,
          url: String
        }
      ]
    }
  ],
  skus: [
    {
      sku: Number,
      quantity: Number,
      size: String
    }
  ],
  related: [
    {
      related_product_id: Number
    }
  ]
});

export default productSchema;
