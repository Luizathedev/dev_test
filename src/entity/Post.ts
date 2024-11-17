import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User"; 

@Entity("post")
export class Post {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: "varchar", length: 100 })
    title: string = '';

    @Column({ type: "varchar", length: 100 })
    description: string = '';

    @ManyToOne(() => User, user => user.posts)  
    @JoinColumn({ name: "userId" })
    user: User = {} as User; 
}
