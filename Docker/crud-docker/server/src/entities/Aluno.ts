import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"aluno"})
export class Aluno {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    curso: string;

}
