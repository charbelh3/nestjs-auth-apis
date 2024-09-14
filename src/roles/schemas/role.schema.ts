import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Action } from '../enums/action.enum';
import { Resource } from '../enums/resource.enum';

@Schema()
class Permission {
  @Prop({ required: true, enum: Resource })
  resource: Resource;

  @Prop({ type: [{ type: String, enum: Action }] })
  actions: Action[];
}

@Schema()
export class Role {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: [Permission] })
  permissions: Permission[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
