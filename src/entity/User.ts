import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post"; 

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: "varchar", length: 100 })
    firstName: string = '';

    @Column({ type: "varchar", length: 100 })
    lastName: string = '';

    @Column({ type: "varchar", length: 100, unique: true })
    email: string = '';

    @OneToMany(() => Post, post => post.user) 
    posts: Post[] = [];
}
