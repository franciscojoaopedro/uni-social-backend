const User=require("../models/User.model")
const bcrypt=require("bcrypt")

module.exports={
    async createUser(req,res){
        try {
            const {nome,email,senha,numeroDeProcesso}=req.body
            const validateData=nome|| email||senha||numeroDeProcesso
            if(!validateData){
                res.json({error:true,message:"Por favor verifica os dados"})
            }
            // verificar se o usuario já existe
            const verificarUsuarioExiste= await User.findOne({numeroDeProcesso:numeroDeProcesso})
            if(!verificarUsuarioExiste){
                res.json({message:"Numero de processo já existe, por favor usa outro número!"})
            }

            // incripitar a senha
            const saltoDaSenha= await bcrypt.genSalt(12)
            const senhaIncripitada= await bcrypt.hash(senha,saltoDaSenha)


            try {
                const data= {nome,email,senha:senhaIncripitada,numeroDeProcesso}
                const user= await new User(data).save()

                res.json({error:false, message:"Usuario criado!",user:user})
                
            } catch (error) {
                res.json({error:true,message:`Erro ao criar o usuario! ${error}`})
            }


        } catch (error) {
            res.json({error:true,message:`Erro ao criar o usuario! ${error}`})
        }
    },
    async updateUser(req,res){
        try {
            const _id=req.params.id
            const {nome,numeroDeProcesso,email}=req.body
            const data={nome,numeroDeProcesso,email}
            const user= await User.findByIdAndUpdate({_id},data,{new:true})
            res.json({error:false,message:" dados do usuario atualizado",user:user})
        } catch (error) {
            res.json({error:true,message:" dados não autualizado"})

        }
    },
    async updateSenha(req,res){
        try {
            const _id=req.params.id
            const {senha}= req.body
            const saltoDaSenha= await bcrypt.genSalt(12)
            const senhaIncripitada= await bcrypt.hash(senha,saltoDaSenha)
            const data= await User.findByIdAndUpdate(_id,{senha:senhaIncripitada})

            res.json({error:false,message:"senha atualizada!"})
        } catch (error) {
            res.json({error:false,message:error})
        }
    }

}