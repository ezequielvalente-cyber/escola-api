import {IsString, IsNotEmpty} from 'class-validator';

export class CreateProdutoDto{
    
    @IsString()
    @IsNotEmpty({message: 'Nome é obrigatorio'})
    nome:string
    
    @IsString()
    @IsNotEmpty({message: 'Preço é obrigatorio'})
    preco:string
    
    @IsString()
    @IsNotEmpty({message: 'Data de Validade é obrigatorio'})
    dataValidade:string
}