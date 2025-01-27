import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository : Repository<Usuario>,
  ){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const correoExiste = await this.usuarioRepository.findOne({
      where: { correoElectronico: createUsuarioDto.correoElectronico },
    });
  
    if (correoExiste) {
      throw new Error(`El correo ${createUsuarioDto.correoElectronico} ya está registrado.`);
    }
   const newusuario = await this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(newusuario)
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(id: number) {
    const buscarUsuario = await this.usuarioRepository.findOneBy({ id });
    return buscarUsuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioRepository.update(id, updateUsuarioDto);
    return this.usuarioRepository.findOneBy ({ id });
  }

  async remove(id: number) {
    const eliminarUsuario = await this.findOne(id);
    if (!eliminarUsuario){
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return this.usuarioRepository.remove(eliminarUsuario);
  }
}
