import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    correoElectronico: string;

    @Column()
    rol: string;
}
