import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'


const toEmailAddress = "juan.miranda.hr9@gmail.com, hr9.dmn@gmail.com";

type fieldNamesType = {
  nombre: string;
  genero: string;
  telefono: string;
  correo: string;
  etnia: string;
  comunidadLinguistica: string;
  organizacion: string;
  comunidad: string;
  municipio: string;
  departamento: string;
  textarea1: string;
  textarea2: string;
  textarea3: string;
  textarea4: string;
  textarea5: string;
  [key: string]: string; // Index signature 
};

const fieldNames: fieldNamesType = {
  nombre: 'Nombre',
  genero: 'Género',
  telefono: 'Teléfono',
  correo: 'Correo',
  etnia: 'Etnia',
  comunidadLinguistica: 'Comunidad lingüística',
  organizacion: 'Organización',
  comunidad: 'Comunidad',
  municipio: 'Municipio',
  departamento: 'Departamento',
  textarea1: 'Motivo de preocupación como resultado de las siguientes fallas, desatenciones o agravios:',
  textarea2: 'Indicar el nombre de la persona o agencia que causa el problema (empresas contratistas, organizaciones implementadoras, instituciones del estado, personas particulares, técnicos, entre otros.)',
  textarea3: 'Descripción de las consecuencias que derivaron de las fallas o desatenciones del FTM y/u otros socios ejecutores',
  textarea4: 'Listado (si se conoce) de los principios o procedimientos del proyecto que se considera que no se respetaron',
  textarea5: 'Menciones que medidas correctivas y/o que soluciones de remediación y compensación se deberían de llevar a cabo frente a los posibles problemas causados'
}

function getFieldName(key: keyof fieldNamesType) {
  return fieldNames[key] || key;
}

function getValue(val: string) {
  return val || "N/R";
}

export const GET = async (req: Request, res: Response) => {
  console.log("test G")
  return NextResponse.json({ text: 'Hello' }, { status: 200 });
}

export const POST = async (req: Request, res: Response) => {
  console.log(' > post');
  try {
    const formData = await req.json();
    const formDataKeys = Object.keys(formData)
    let subject = "Nueva queja " + (new Date()).toLocaleString();
    let text = "<h1>" + subject + "</h1>";
    text += "<div>" + Date() + "</div>";
    formDataKeys.forEach((key: keyof fieldNamesType) => {
      text = text + "<p>" + "<div><strong>" + getFieldName(key) + ": </strong></div>" + getValue(formData[key]) + "</p>";
    })

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'testmailerjm@gmail.com',
        pass: 'borp bclu nvvp ydyl',
      },
    });

    // Create the email options
    const mailOptions = {
      from: 'testmailerjm@gmail.com',
      to: toEmailAddress,
      subject: subject,
      text: text,
      html: text,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    //console.log('Email sent:', info.response);
    //  res.send('Email sent successfully >>> ' );

    return NextResponse.json({ text: 'Email sent successfully >>> ' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json({ text: 'bad data' }, { status: 400 });

  }

}