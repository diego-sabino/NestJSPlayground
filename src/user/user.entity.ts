import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'first_name', type: 'varchar', length: 50 })
  firstName: string;
  @Column({ name: 'last_name', type: 'varchar', length: 50 })
  lastName: string;
  @Column({ name: 'email', type: 'varchar', length: 50 })
  email: string;
  @Column({ name: 'password', type: 'varchar', length: 50 })
  password: string;
  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}