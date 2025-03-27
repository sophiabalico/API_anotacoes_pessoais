import prisma from "../../prisma/client.js";

class AnotacaoModel {
  getAll = async () => {
    return await prisma.note.findMany();
  };

  create = async (titulo, conteudo) => {
    return await prisma.note.create({
      data: {
        titulo,
        conteudo,
      },
    });
  };

  update = async (id, titulo,conteudo, favorita, cor) => {
    try {
      const anotacao = await prisma.note.update({
        where: { id },
        data: {
          titulo,
          conteudo,
          favorita,
          cor,
        },
      });

      return anotacao;
    } catch (error) {
      console.log("Error: ", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const anotacaoDeletada = await prisma.note.delete({
        where: { id },
      });

      return anotacaoDeletada;
    } catch (error) {
      console.log("Erro ao deletar a anotação", error);
      throw error;
    }
  };
}
export default new AnotacaoModel();
