import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';


import { randomUUID } from 'crypto';
import { Produto } from './entites/produto.entity.js';
import { CreateProdutoDto } from './dto/create-produto.dto.js';

@Injectable()
export class ProdutosService {
    private produtos: Produto[]=[]
        //criar
    create(createProdutoDto: CreateProdutoDto):Produto{
        const nomeExistente=this.produtos.find(
            (a)=>a.nome===createProdutoDto.nome
        )
        if(nomeExistente){
            throw new ConflictException("produto já cadastrado")
        }
        const novoProduto:Produto={
            id:randomUUID(),
            ...createProdutoDto,
            criadoEm:new Date()
        }
        this.produtos.push(novoProduto)
        return novoProduto;
    }

    //ler todos
    findAll():Produto[]{
        return this.produtos;
    }

    //apagar
    remove(id:string):{message:string}{
        const index=this.produtos.findIndex((a)=>a.id===id);
        if(index===-1){
            throw new NotFoundException("Produto não encontrado")
        }
        this.produtos.splice(index,1) //splice remove do array, o 1 define que apos encontar 1 id ele remove e para
        return {message:`Produto com id: ${id} removido com sucesso.`}
    }

}
