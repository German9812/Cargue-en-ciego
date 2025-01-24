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

@Module({
  imports: [UsuariosModule, DetalleModule, ProductosModule, NovedadModule, CargaModule, DespachoModule, EnviosModule, MuelleModule, EstadoMuelleModule, VehiculoModule, SitioModule, TransportadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
