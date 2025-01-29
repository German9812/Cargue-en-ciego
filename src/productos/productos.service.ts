import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    try {
      const productoData = {
        Cova: createProductoDto.Cova,
        Nombre: createProductoDto.Nombre,
        Descripcion: createProductoDto.Descripcion,
        carga:  {
          Id_carga: createProductoDto.Carga_id
        }
      };
      console.log('Data a guardar:', productoData);

      const producto = this.productoRepository.create();
      return await this.productoRepository.save(producto);
    } catch (error) {
      if (error.code === '23505'){
        throw new BadRequestException('El producto ya existe');
      }
      throw error;
    }
  }
  

  async findAll() {
    return await this.productoRepository.find({
    relations: ['detalle', 'carga'] 
   });
  }

  async findOne(id: number) {
    const producto = await this.productoRepository.findOne({
      where: { Id_producto: id},
      relations: ['detalle', 'carga']
    });

    if (!producto) {
      throw new NotFoundException(`producto con ID ${id} no encontrado`);
    }

    return producto;
  } 

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);
    try{
      const updateData = {
        ...updateProductoDto,
        carga: updateProductoDto.Carga_id? {
          Id_carga: updateProductoDto.Carga_id
        } : undefined
      };

      Object.assign(producto, updateData);
      return await this.productoRepository.save(producto);
    } catch (error) {
      if (error.code ==='23505'){
        throw new BadRequestException('El producto ya existe');
      }
      throw error;
    }
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    
    try {
      await this.productoRepository.remove(producto);
    return {
      message: `producto con ID${id} eliminado exitosamente`  
    };
  }catch (error){
    if (error.code === '23503'){
      throw new BadRequestException(
        'No se puede eliminar el producto porque tiene registros relacionados'
      );
    }
    throw error;
    }
  }
}