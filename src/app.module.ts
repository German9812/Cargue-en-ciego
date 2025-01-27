import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DetalleModule } from './detalle/detalle.module';
import { ProductosModule } from './productos/productos.module';
import { NovedadModule } from './novedad/novedad.module';
import { CargaModule } from './carga/carga.module';
import { DespachoModule } from './despacho/despacho.module';
import { EnviosModule } from './envios/envios.module';
import { MuelleModule } from './muelle/muelle.module';
import { EstadoMuelleModule } from './estado-muelle/estado-muelle.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { SitioModule } from './sitio/sitio.module';
import { TransportadorModule } from './transportador/transportador.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carga } from './carga/entities/carga.entity';
import { Despacho } from './despacho/entities/despacho.entity';
import { Detalle } from './detalle/entities/detalle.entity';
import { Envios } from './envios/entities/envio.entity';
import { EstadoMuelle } from './estado-muelle/entities/estado-muelle.entity';
import { Muelle } from './muelle/entities/muelle.entity';
import { Novedad } from './novedad/entities/novedad.entity';
import { Producto } from './productos/entities/producto.entity';
import { Sitio } from './sitio/entities/sitio.entity';
import { Transportador } from './transportador/entities/transportador.entity';
import { Vehiculo } from './vehiculo/entities/vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forRoot ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '0000',
    database: 'prueba',
    autoLoadEntities: true,
    synchronize: true,
    entities: [Carga, Despacho, Detalle, Envios, EstadoMuelle, Muelle, Novedad, Producto, Sitio, Transportador, Usuario, Vehiculo],
  }),
  UsuariosModule, DetalleModule, ProductosModule, NovedadModule, CargaModule, DespachoModule, EnviosModule, 
  MuelleModule, EstadoMuelleModule, VehiculoModule, SitioModule, TransportadorModule],
  

controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
