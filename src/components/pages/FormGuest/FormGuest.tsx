"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./FormGuest.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

interface FormType {
  _id?: number;
  name?: string;
  partner?: string;
  dev: string;
}

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const url = process.env.NEXT_PUBLIC_API_URL;

const FormGuest = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<FormType | null>(null);
  const [star, setStar] = useState<FormType | null>(null);
  const { register, handleSubmit } = useForm<FormType>({});
console.log(star);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShow(JSON.parse(String(localStorage.getItem("show"))));
      setUser(JSON.parse(String(localStorage.getItem("name"))));
    }
  }, []);

  const onSubmit: SubmitHandler<FormType> = async (FormData) => {
    try {
      const nameData = {
        id: FormData._id,
        name: FormData.name,
        dev: FormData.dev,
      };
      const partnerData = {
        id: FormData._id,
        partner: FormData.partner,
        dev: FormData.dev,
      };
      const { data: responseName } = await axios.post(`${url}/Bekzat-and-Gulnara`, nameData, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const { data: responsePartner } = await axios.post(`${url}/Bekzat-and-Gulnara`, partnerData, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      console.log(responsePartner);
      
      const messageModel = (FormData: FormType) => {
        let messageTG = `КИМ: <b>${FormData.name}</b>\n`;
        messageTG += `ЖААРЫ: <b>${FormData.partner}</b>\n`;
        messageTG += `ТАКТОО: <b>${FormData.dev}</b>\n`;
        return messageTG;
      };
      const message = messageModel(FormData);
      await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });
      localStorage.setItem("name", JSON.stringify(FormData));
      localStorage.setItem("show", JSON.stringify(true));
      window.location.reload();
      setStar(responseName);
    } catch (e) {
      console.error(e);
    }
  };

  if (show) {
    return (
    <section className={scss.FormGuest}>
      <div className={scss.content}>
        <h1>СПАСИБО ЧТО ЗАПОЛНИЛИ АНКЕТУ</h1>
        <p>{user?.name} И {user?.partner}</p>
      </div>
    </section>
    )
  }

  return (
    <section className={scss.FormGuest}>
      <div className="container">
        <div className={scss.content}>
          <h1>АНКЕТА ГОСТЯ</h1>
          <p>Просьба подтвердить присутствие до 8 октября</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Ваша Имя и Фамилия"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="Имя и Фамилия вашей спутницы"
              {...register("partner", { required: false })}
            />  
            <p>Планируете ли вы присутствовать на свадьбе?</p>
            <div className={scss.radio}>
              <input
                type="radio"
                value="Приду✅"
                {...register("dev", { required: true })}
              />
              <p>Да, с удовольствием</p>
            </div>
            <div className={scss.radio}>
              <input
                type="radio"
                value="Не смогу❌"
                {...register("dev", { required: true })}
              />
              <p>К сожалению, не смогу</p>
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormGuest;