import { FaHtml5, FaCss3Alt, FaPython, FaNodeJs, FaReact, FaGitAlt, FaAngular, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiLeaflet, SiOpencv, SiTypescript, SiDotnet, SiMercadopago, SiGooglemaps, SiMysql } from "react-icons/si";
import { DiMsqlServer, DiMysql, DiScrum } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloudstorage } from "react-icons/si";

export const TECH_MAP = {
  html:       { label: "HTML5",         Icon: FaHtml5 },
  css:        { label: "CSS3",          Icon: FaCss3Alt },
  js:         { label: "JavaScript",    Icon: IoLogoJavascript },
  ts:         { label: "TypeScript",    Icon: SiTypescript },
  react:      { label: "React",         Icon: FaReact },
  angular:    { label: "Angular",       Icon: FaAngular },
  node:       { label: "Node.js",       Icon: FaNodeJs },
  express:    { label: "Express",       Icon: SiExpress },
  mysql:      { label: "MySQL",         Icon: DiMysql },
  sqlserver:  { label: "SQL Server",    Icon: DiMsqlServer },
  csharp:     { label: "C#",            Icon: TbBrandCSharp },
  dotnet:     { label: ".NET",          Icon: SiDotnet },
  python:     { label: "Python",        Icon: FaPython },
  git:        { label: "Git",           Icon: FaGitAlt },
  scrum:      { label: "SCRUM",         Icon: DiScrum },
  leaflet:    { label: "Leaflet",       Icon: SiLeaflet },
  azure:      { label: "Azure",         Icon: VscAzure },
  hostinger:  { label: "VPS Hostinger", Icon: SiGooglecloudstorage },
  opencv:     { label: "OpenCV",        Icon: SiOpencv },
  mercadopago:{ label: "Mercado Pago",  Icon: SiMercadopago },
  googlemaps: { label: "Google Maps",   Icon: SiGooglemaps },
};

export const TECH_LIST = [
  { id: 'html',       label: 'HTML5',       Icon: FaHtml5 },
  { id: 'css',        label: 'CSS3',        Icon: FaCss3Alt },
  { id: 'js',         label: 'JavaScript',  Icon: IoLogoJavascript },
  { id: 'ts',         label: 'TypeScript',  Icon: SiTypescript },
  { id: 'python',     label: 'Python',      Icon: FaPython },
  { id: 'csharp',     label: 'C#',          Icon: TbBrandCSharp },
  { id: 'dotnet',     label: '.NET',        Icon: SiDotnet },
  { id: 'node',       label: 'Node.js',     Icon: FaNodeJs },
  { id: 'express',    label: 'Express',     Icon: SiExpress },
  { id: 'react',      label: 'React',       Icon: FaReact },
  { id: 'angular',    label: 'Angular',     Icon: FaAngular },
  { id: 'leaflet',    label: 'Leaflet',     Icon: SiLeaflet },
  { id: 'opencv',     label: 'OpenCV',      Icon: SiOpencv },
  { id: 'sqlsrv',     label: 'SQL Server',  Icon: DiMsqlServer },
  { id: 'mysql',      label: 'MySQL',       Icon: DiMysql },
  { id: 'git',        label: 'Git',         Icon: FaGitAlt },
  { id: 'scrum',      label: 'SCRUM',       Icon: DiScrum },
  { id: 'mercadopago',label: 'Mercado Pago',Icon: SiMercadopago },
  { id: 'googlemaps', label: 'Google Maps', Icon: SiGooglemaps },
];
