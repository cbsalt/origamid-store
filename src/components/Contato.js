import React from "react";
import styles from "./Contato.module.css";
import contact from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={contact} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato conosco</h1>
        <ul className={styles.dados}>
          <li>charles@dev.com</li>
          <li>99999-9999</li>
          <li>Rua Alibaba, 888</li>
        </ul>
      </div>
      <h1>Contato</h1>
    </section>
  );
};

export default Contato;
