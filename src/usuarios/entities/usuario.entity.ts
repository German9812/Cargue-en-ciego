import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
@Unique(['correoElectronico'])
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', unique: true})
    correoElectronico: string;

    @Column()
    rol: string;
}
