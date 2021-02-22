import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  })
  id: string;

  @Column({
      allowNull: false,
      type: DataType.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    }
  )
  email: string;

  @Column({
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  )
  password: string;

  @Column({
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  )
  createdAt: Date;

  @Column({
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  )
  updatedAt: Date;

  @Column({ type: DataType.DATE })
  deletedAt: Date;
}
