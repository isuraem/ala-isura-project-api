import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    name: string;

    @Column({ default: '' })
    email: string;

    @Column({ default: 10 })
    role: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}