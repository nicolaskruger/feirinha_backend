import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Role extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  claim: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
