import {Request, Response} from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CommentController{
    constructor(){}
    //Mostrar comentários
    async listComments(req: Request, res: Response){
        try{
            const comments = await prisma.comment.findMany();
            res.json(comments)
        }catch(error){
            console.log(error);
            return res.status(500).json({
                error: error
            })
        }
    }
    //Criar comentário
    async createComment(req: Request, res: Response){        
        try{                                        
            const commentData = req.body;   
            const newComment = await prisma.comment.create({
                data: commentData,
            })
            console.log("Comentário criado com sucesso");
            res.json({
                status: 200,
                newComment: newComment,
                })
        }catch(error){
            console.log("Erro ao criar comentário");
            res.json({
                status: 500,
                message: error
            })
        }    
    }

    //Atualizar Comentário
    async updateComment(req: Request, res: Response){
        const commentData = req.body;
        const commentId = req.params.id;
        try{
            const newComment = await prisma.comment.update({
                where: {
                    id: parseInt(commentId),
                },
                data: commentData,
            });
            console.log("comentário atualizado com sucesso");
            res.json({
                status: 200,
                newComment: newComment
            })
        }catch(error){
            console.log("Erro ao atualizar comentário");
            res.json({
                status: 500,
                message: error,
            })
            console.log(error);
        }
    }

    //Deletar Comentário
    async deleteComment(req: Request, res: Response){
        const commentID = req.params.id;
        try{
            const commentDeleted = await prisma.comment.delete({
                where: {
                    id: parseInt(commentID)
                },
            })
            res.json({
                status: 200,
                commentDeleted: commentDeleted
            })
        }catch(error){
            res.json({
                status: 500,
                message: error
            })
        }
    }
}

export default new CommentController;