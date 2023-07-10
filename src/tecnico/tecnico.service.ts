import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';

@Injectable()
export class TecnicoService {

  private tecnicos: Tecnico[] = [
    {
      id:1, nombre:'Luis' , nivel: '4', experiencia: 'media', estado:true
    },
    {
      id:2, nombre:'Marcos' , nivel: '3', experiencia: 'media',estado:true
    },
    {
      id:3, nombre:'Pedro' , nivel: '2', experiencia: 'baja',estado:true
    },
  ]

  create(createTecnicoDto: CreateTecnicoDto) {
    const tecnico = new Tecnico();
    tecnico.id=  Math.max( ... this.tecnicos.map(elemento => elemento.id),0 )+1 ;
    tecnico.nombre= createTecnicoDto.nombre;
    this.tecnicos.push(tecnico);
    return tecnico;
  }

  findAll() : Tecnico[] {
    return this.tecnicos;
  }

  findOne(id: number) {
    const tecnico =  this.tecnicos.find(tecnico=> tecnico.id===id);
    if (!tecnico) throw new NotFoundException(`ID ${id} not found`)
    return tecnico;
  }

  update(id: number, updateTecnicoDto: UpdateTecnicoDto) {
    const { nombre, nivel, experiencia, estado } = updateTecnicoDto;
    const tecnico = this.findOne(id);
    if (nombre) tecnico.nombre = nombre;
    if (nivel) tecnico.nivel = nivel;
    if (experiencia) tecnico.experiencia = experiencia;
    if (estado!= undefined) tecnico.estado = estado;

    this.tecnicos =  this.tecnicos.map( elemento=> {
      if (elemento.id===id) return tecnico;
      return elemento;
    } )

    return tecnico;

  }

  remove(id: number) {
    this.findOne(id);
    this.tecnicos =  this.tecnicos.filter(elemento=> elemento.id!== id);
  }
}
