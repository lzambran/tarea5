import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';

@Controller('tecnico')
export class TecnicoController {
  constructor(private readonly tecnicoService: TecnicoService) {}

  @Post()
  create(@Body() createTecnicoDto: CreateTecnicoDto) {
    return this.tecnicoService.create(createTecnicoDto);
  }

  @Get()
  findAll() : Tecnico[] {
    return this.tecnicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tecnicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTecnicoDto: UpdateTecnicoDto) {
    return this.tecnicoService.update(+id, updateTecnicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tecnicoService.remove(+id);
  }
}
