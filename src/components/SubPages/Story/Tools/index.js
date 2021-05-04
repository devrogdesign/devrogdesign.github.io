import React from "react"
import FigmaSvg from "../../../../../static/assets/img/tools/figma.svg"
import XdSvg from "../../../../../static/assets/img/tools/adobe_xd.svg"
import IllustratorSvg from "../../../../../static/assets/img/tools/adobe_illustrator.svg"
import PhotoshopSvg from "../../../../../static/assets/img/tools/adobe_photoshop.svg"
import VsCodeSvg from "../../../../../static/assets/img/tools/vs_code.svg"
import WebstormSvg from "../../../../../static/assets/img/tools/jb_webstorm.svg"
import GithubSvg from "../../../../../static/assets/img/tools/git.svg"
import TaskadeSvg from "../../../../../static/assets/img/tools/taskade.svg"
import DriveSvg from "../../../../../static/assets/img/tools/google_drive.svg"
import GmailSvg from "../../../../../static/assets/img/tools/gmail.svg"
import MeetSvg from "../../../../../static/assets/img/tools/google_meet.svg"



const Tools = () => (
<section className="tools section">
    <div className="bd-container">
    <span className="section-subtitle">¿Qué herramientas utilizo?</span>
    <h2 className="section-title">Solo las herramientas necesarias</h2>
    <p className="section-description">
      Hay miles y miles de herramientas, yo me enfoco en utilizar las que me generan mayor comodidad y agilicen mi trabajo e interacción con mis clientes.
    </p>

    <div className="tools__container wrapper bd-grid">
      
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
              <div className="box__icon">
              <img src={FigmaSvg} alt="Figma Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Figma</h3>
          <div className="card__description">
          Utilizo Figma para crear interfaces de usuario y prototipos funcionales.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={XdSvg} alt="Adobe XD Logo"></img>
              </div>
          </div>
          <h3 className="card__title">XD</h3>
          <div className="card__description">
          También uso XD para crear interfaces de usuario como figma dependiendo del proyecto.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={IllustratorSvg} alt="Adobe Illustrator Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Illustrator</h3>
          <div className="card__description">
          Lo uso para crear diseños vectoriales y complementar los diseños hechos en Figma o XD.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={PhotoshopSvg} alt="Adobe Photoshop Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Photoshop</h3>
          <div className="card__description">
          Uso Photoshop para retocar y editar imagenes destinadas al proyecto.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={VsCodeSvg} alt="VS Code Logo"></img>
              </div>
          </div>
          <h3 className="card__title">VS Code</h3>
          <div className="card__description">
          Mi editor de código favorito, mi aliado para codificar proyectos personalizados.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={WebstormSvg} alt="Webstorm Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Webstorm</h3>
          <div className="card__description">
          Me ayudo con Webstorm cuando necesito una suite completa de desarrollo web.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={GithubSvg} alt="Github Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Github</h3>
          <div className="card__description">
          Mi herramienta para respaldar y versionar los proyectos sin riesgo de que se pierdan.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={TaskadeSvg} alt="Taskade Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Taskade</h3>
          <div className="card__description">
          Uso Taskade para gestionar y organizar los proyectos para asi tener el control de avance.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={DriveSvg} alt="Google Drive Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Drive</h3>
          <div className="card__description">
          Drive mi herramienta para guardar los recursos que voy utilizando en el trancurso del trabajo.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={GmailSvg} alt="Google Gmail Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Gmail</h3>
          <div className="card__description">
          Uso Gmail para comunicarme y las conversación queden respaldada en ese medio.
          </div>
        </div>

      </div>
      <div className="card">
        <div className="card__header">
        <div className="card__icon">
              <div className="box__icon">
              <img src={MeetSvg} alt="Google Meet Logo"></img>
              </div>
          </div>
          <h3 className="card__title">Meet</h3>
          <div className="card__description">
          Uso Meet para tener videollamadas y poder tener una comunicación más interactiva.
          </div>
        </div>

      </div>
    </div>
    </div>
  </section>
)

export default Tools 