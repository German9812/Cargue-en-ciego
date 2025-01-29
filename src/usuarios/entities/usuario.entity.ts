import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity({schema: 'dev_practicantes', name: 'Usuario'})
@Unique(['correoElectronico'])
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', unique: true})
    correoElectronico: string;

    @Column()
    rol: string;
}
