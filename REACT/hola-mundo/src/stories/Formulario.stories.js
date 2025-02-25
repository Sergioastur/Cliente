import React from "react";
import Formulario from "../components/Formulario";
export default {
title: "Componentes/Formulario", // Título de la sección en Storybook
component: Formulario, // El componente que se está documentando
};
// Historia básica
export const Basico = () => <Formulario />;
// Historia con valor inicial
export const ConValorInicial = () => <Formulario initialState="Sergio" />;