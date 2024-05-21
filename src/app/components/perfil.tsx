import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="main">
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="main-container">
          <div className="profile">
            <div className="profile-avatar">
              <img
                src="https://i.ibb.co/C6TFprm/profile.png"
                alt="Profile Avatar"
                className="profile-img"
              />
              <div className="profile-name">Sara Sousa</div>
            </div>
            <img
              src="https://i.ibb.co/F5nCNqk/background.jpg"
              alt="Profile Cover"
              className="profile-cover"
            />
            <div className="profile-menu">
              <a className="profile-menu-link active">Início</a>
              <a className="profile-menu-link">Vendas</a>
              <a className="profile-menu-link">Leads</a>
              <a className="profile-menu-link">Contas</a>
              <a className="profile-menu-link">Contatos</a>
              <a className="profile-menu-link">Calendário</a>
              <a className="profile-menu-link">Painéis</a>
              <a className="profile-menu-link">Relatórios</a>
            </div>
          </div>
          <div className="timeline2">
            <div className="timeline-left2">
              <div className="intro box">
                <div className="intro-title">
                  Arquivos
                  <button className="intro-menu"></button>
                </div>
                <div className="info">
                  <div className="info-item">
                    <a href="">👥 Sales_leadersship</a>
                  </div>
                  <div className="info-item">
                    <a href="">💼 Sales</a>
                  </div>
                  <div className="info-item">
                    <a href="">📅 Sales_operation</a>
                  </div>
                </div>
              </div>

              <div className="pages box">
                <div className="intro-title">
                  Conexões
                  <button className="intro-menu"></button>
                </div>
                <div className="user">
                  <img
                    src="https://i.ibb.co/0BYPK0R/people.png"
                    alt="User Avatar"
                    className="user-img"
                  />
                  <div className="username">Grupos (0)</div>
                </div>
                <div className="user">
                  <img
                    src="https://i.ibb.co/6b8981b/add-friend.png"
                    alt="User Avatar"
                    className="user-img"
                  />
                  <div className="username">Seguidores (0)</div>
                </div>
                <div className="user">
                  <img
                    src="https://i.ibb.co/Db2tN12/followers.png"
                    alt="User Avatar"
                    className="user-img"
                  />
                  <div className="username">Seguindo (0)</div>
                </div>
              </div>
            </div>

            <div className="timeline-right2">
              <div className="status box">
                <div className="status-menu">
                  <a className="status-menu-item active" href="#">
                    Sobre
                  </a>
                  <a className="status-menu-item" href="#">
                    Contato
                  </a>
                  <a className="status-menu-item" href="#">
                    História
                  </a>
                </div>
              </div>
              <div className="album box">
                <div className="status-main">
                  <div className="album-detail">
                    <h2>Detalhes</h2>
                    <div className="album-title">
                      Nome Completo <strong>Sara Sousa</strong>
                    </div>
                    <div className="album-title">
                      Gerente<strong></strong>
                    </div>
                    <p></p>
                    <div className="album-title">
                      Cargo <strong></strong>
                    </div>
                    <div className="album-title">
                      Nome da Empresa <strong>FIAP</strong>
                    </div>
                  </div>
                  <button className="intro-menu"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
