import { IsNotEmpty, IsString } from "class-validator";

export class CreateTecnicoDto { 

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    nivel:string;

    @IsString()
    @IsNotEmpty()
    experiencia:string;
}
