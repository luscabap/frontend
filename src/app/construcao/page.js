import React from "react";
import Image from "next/image";
import Link from "next/link";

const construcao = () => {
  return (
    <div className="bg-hepato-blue flex items-center justify-center w-full h-[100vh]">
    <div className="bg-construcao w-[1003px] h-[921px] flex flex-col justify-center items-center">
      <div>
        <Image src="/404.png" alt="Erro 404" width={583} height={389} />
      </div>

      

      <section className="grid grid-cols-2 items-center justify-end mt-7 ml-80">
        <Image src="/oops.png" alt="Erro 404" width={254} height={50} />
        <Image src="/erro.png" alt="Erro 404" width={264} height={264} />
      </section>

      <div className="mt-7 flex flex-col items-center">
        <p className='text-roxo text-center text-xl font-semibold w-[685px]'>Página não encontrada. Desculpe pelo transtorno. Se precisar de ajuda, entre em contato conosco.</p>
      </div>

      <div className="bg-roxo rounded-full w-[239px] h-[54px] flex items-center justify-center text-white mt-4 text-2xl shadow-fushia">
        <Link href="/Homepage"  > Voltar </Link>
      </div>
    </div>
  </div>
  );
};

export default construcao;