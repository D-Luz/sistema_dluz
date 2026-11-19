import { useEffect, useState } from "react";

type SiteMode = "lighting" | "electrical";

const A = "/assets";

function Brand({ mode }: { mode: SiteMode }) {
  return mode === "lighting" ? (
    <a className="brand brand-lighting" href="#top" aria-label="D.Luz Iluminação">
      <span className="brand-mark">D.</span>
      <span>
        <b>LUZ</b>
        <small>ILUMINAÇÃO</small>
      </span>
    </a>
  ) : (
    <a className="brand brand-electrical" href="#top" aria-label="D.Luz Elétrica">
      <span className="brand-mark">D.</span>
      <span>
        <b>LUZ</b>
        <small>ELÉTRICA</small>
      </span>
    </a>
  );
}

function SiteSwitch({ mode, onChange }: { mode: SiteMode; onChange: (mode: SiteMode) => void }) {
  return (
    <div className="site-switch" aria-label="Alternar entre os sites">
      <button
        className={mode === "lighting" ? "active" : ""}
        onClick={() => onChange("lighting")}
        aria-pressed={mode === "lighting"}
      >
        Iluminação
      </button>
      <button
        className={mode === "electrical" ? "active" : ""}
        onClick={() => onChange("electrical")}
        aria-pressed={mode === "electrical"}
      >
        Elétrica
      </button>
    </div>
  );
}

function Header({ mode, onChange }: { mode: SiteMode; onChange: (mode: SiteMode) => void }) {
  const lighting = mode === "lighting";
  return (
    <header className={`main-header ${lighting ? "dark-header" : "light-header"}`}>
      <div className="header-inner">
        <Brand mode={mode} />
        <nav aria-label="Navegação principal">
          {(lighting
            ? [
                ["Produtos", "#produtos"],
                ["Linhas", "#linhas"],
                ["Serviços", "#servicos"],
                ["Ambientes", "#ambientes"],
                ["Dúvidas", "#duvidas"],
              ]
            : [
                ["Produtos", "#produtos"],
                ["Soluções", "#solucoes"],
                ["Serviços", "#servicos"],
                ["Calculadora", "#calculadora"],
                ["Dúvidas", "#duvidas"],
              ]
          ).map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <SiteSwitch mode={mode} onChange={onChange} />
      </div>
    </header>
  );
}

function CropImage({ src, className = "", alt }: { src: string; className?: string; alt: string }) {
  return (
    <div className={`crop-image ${className}`}>
      <img src={`${A}/${src}`} alt={alt} />
    </div>
  );
}

const Arrow = () => <span aria-hidden="true">→</span>;

function LightingSite({ onChange }: { onChange: (mode: SiteMode) => void }) {
  const categories = [
    ["Pendentes", "142 modelos", "cat-1"],
    ["Arandelas", "96 modelos", "cat-2"],
    ["Plafons", "78 modelos", "cat-3"],
    ["Spots e Trilhos", "214 modelos", "cat-4"],
    ["Fitas e Perfis LED", "63 modelos", "cat-5"],
    ["Áreas Externas", "110 modelos", "cat-6"],
  ];
  const products = [
    ["LUMEN CONE", "Lumen Cone", "12W", "3000K"],
    ["HALO DUO", "Halo Duo", "8W", "2700K"],
    ["TRILHOS", "Track Mini 24°", "10W", "4000K"],
    ["EXTERNO", "Balizador Garden", "6W", "3000K"],
  ];

  return (
    <div className="lighting-site" id="top">
      <Header mode="lighting" onChange={onChange} />
      <main>
        <section className="lighting-hero">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-pill">
                <b>Novo</b> Coleção Aurora 2026 <Arrow />
              </div>
              <h1>
                Luz que dá forma
                <br />
                aos seus <em>ambientes.</em>
              </h1>
              <p>
                Luminárias de design, soluções em LED e projetos luminotécnicos para residências,
                comércios e obras de arquitetura. Qualidade técnica com acabamento impecável.
              </p>
              <div className="button-row">
                <a className="btn btn-teal" href="#produtos">
                  Explorar catálogo <Arrow />
                </a>
                <a className="btn btn-outline" href="#orcamento">
                  Falar com especialista
                </a>
              </div>
              <div className="metrics">
                <div>
                  <strong>+2.500</strong>
                  <span>projetos iluminados</span>
                </div>
                <div>
                  <strong>+800</strong>
                  <span>modelos no catálogo</span>
                </div>
                <div>
                  <strong>5 anos</strong>
                  <span>de garantia em LED</span>
                </div>
              </div>
            </div>
            <div className="hero-product">
              <CropImage src="bc654.png" className="hero-lamp" alt="Pendente Aurora Globe aceso" />
              <div className="product-caption">
                <div>
                  <small>PENDENTE</small>
                  <strong>Aurora Globe 40</strong>
                </div>
                <div className="tags">
                  <span>18W</span>
                  <span>2700K</span>
                  <span>IRC 95</span>
                </div>
                <b className="round-link">↗</b>
              </div>
            </div>
          </div>
        </section>

        <div className="lighting-benefits">
          {[
            "Certificação INMETRO",
            "Até 80% de economia com LED",
            "Entrega para todo o Brasil",
            "Parceria com arquitetos",
          ].map((item) => (
            <span key={item}>
              <i /> {item}
            </span>
          ))}
        </div>

        <section className="dark-section" id="produtos">
          <div className="page-shell">
            <SectionIntro
              eyebrow="CATÁLOGO"
              title="Encontre a peça ideal"
              description="Seis famílias de produtos pensadas para cada tipo de ambiente, do aconchego residencial à precisão comercial."
              link="Ver catálogo completo"
            />
            <div className="category-grid">
              {categories.map(([name, count, cls]) => (
                <article className="category-card" key={name}>
                  <CropImage
                    src="34afa.png"
                    className={cls}
                    alt={`Ambiente com ${name.toLowerCase()}`}
                  />
                  <div className="shade" />
                  <div className="card-label">
                    <strong>{name}</strong>
                    <span>{count}</span>
                  </div>
                  <b className="round-link">↗</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section products-section">
          <div className="page-shell">
            <SectionIntro eyebrow="DESTAQUES" title="Os mais procurados" />
            <div className="filter-row">
              {["Todos", "Pendentes", "Arandelas", "Spots", "Exterior"].map((filter, index) => (
                <button className={index === 0 ? "active" : ""} key={filter}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="product-grid">
              {products.map(([type, name, power, color], index) => (
                <article className="lighting-product" key={name}>
                  <CropImage
                    src="7f1f9.png"
                    className={`product-shot product-shot-${index + 1}`}
                    alt={name}
                  />
                  <small>{type}</small>
                  <h3>{name}</h3>
                  <div className="spec-row">
                    <span>{power}</span>
                    <span>{color}</span>
                    <span>{index % 2 ? "IP20" : "IRC 95"}</span>
                  </div>
                  <a href="#orcamento">
                    Ver detalhes <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lines-section" id="linhas">
          <div className="page-shell">
            <SectionIntro
              eyebrow="LINHAS DE PRODUTO"
              title="Uma linha para cada projeto"
              description="Do essencial bem resolvido ao projeto arquitetônico de alta performance."
              centered
            />
            <div className="line-cards">
              {[
                [
                  "Linha Essencial",
                  "Eficiência e durabilidade para o dia a dia.",
                  "Ótimo custo-benefício",
                ],
                [
                  "Linha Design",
                  "Peças autorais que viram protagonistas do ambiente.",
                  "Mais escolhida",
                ],
                [
                  "Linha Arquitetural",
                  "Precisão óptica e controle total para alto padrão.",
                  "Alta performance",
                ],
              ].map(([title, text, tag], index) => (
                <article className={index === 1 ? "featured" : ""} key={title}>
                  <span className="line-icon">
                    <CropImage
                      src="488e9.png"
                      className={`line-icon-crop line-icon-crop-${index + 1}`}
                      alt=""
                    />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <b>{tag}</b>
                  <a href="#orcamento">
                    {index === 2 ? "Falar com consultor" : "Ver produtos"} <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section guide-section">
          <div className="page-shell guide-grid">
            <div>
              <span className="section-eyebrow">GUIA DE ILUMINAÇÃO</span>
              <h2>Sinta a temperatura da luz</h2>
              <p>
                A temperatura de cor muda completamente a sensação de um espaço. Descubra qual luz
                combina com cada ambiente.
              </p>
              <div className="temperature-options">
                {["2700K", "3000K", "4000K", "6500K"].map((temp, index) => (
                  <button className={index === 1 ? "active" : ""} key={temp}>
                    <i style={{ opacity: 1 - index * 0.18 }} />
                    {temp}
                    <small>{["Quarto", "Sala", "Cozinha", "Garagem"][index]}</small>
                  </button>
                ))}
              </div>
            </div>
            <article className="temperature-card">
              <CropImage src="8b066.png" className="warm-light" alt="Feixe de luz quente" />
              <small>BRANCO QUENTE</small>
              <h3>3000K</h3>
              <input
                type="range"
                min="2700"
                max="6500"
                defaultValue="3000"
                aria-label="Temperatura da luz"
              />
            </article>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="page-shell services-grid">
            <div>
              <span className="section-eyebrow">SERVIÇOS</span>
              <h2>Muito além da luminária</h2>
              <p>
                Acompanhamos seu projeto do primeiro esboço à última lâmpada acesa, com equipe
                técnica especializada.
              </p>
              <a className="btn btn-teal" href="#orcamento">
                Agendar visita técnica <Arrow />
              </a>
            </div>
            <div className="service-cards">
              {[
                [
                  "Projeto luminotécnico",
                  "Cálculo de iluminância, simulações 3D e especificação completa.",
                ],
                [
                  "Consultoria para arquitetos",
                  "Amostras e condições especiais para profissionais parceiros.",
                ],
                [
                  "Instalação e montagem",
                  "Equipe própria para instalação segura, limpa e no prazo.",
                ],
                ["Pós-venda e garantia", "Suporte técnico ágil e garantia de até 5 anos."],
              ].map(([title, text], index) => (
                <article key={title}>
                  <span className="service-icon">
                    <CropImage
                      src="d98bd.png"
                      className={`service-icon-crop service-icon-crop-${index + 1}`}
                      alt=""
                    />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section inspiration" id="ambientes">
          <div className="page-shell">
            <SectionIntro
              eyebrow="INSPIRAÇÃO"
              title="Ambientes iluminados por nós"
              link="Ver portfólio"
            />
            <div className="portfolio-grid">
              <article className="portfolio-main">
                <CropImage src="71b05.png" className="portfolio-1" alt="Living Jardins iluminado" />
                <div>
                  <small>RESIDENCIAL · SÃO PAULO</small>
                  <h3>Living Jardins</h3>
                </div>
              </article>
              <article>
                <CropImage src="71b05.png" className="portfolio-2" alt="Cozinha Vila Nova" />
                <div>
                  <small>GOURMET</small>
                  <h3>Cozinha Vila Nova</h3>
                </div>
              </article>
              <article>
                <CropImage src="71b05.png" className="portfolio-3" alt="Fachada Alphaville" />
                <div>
                  <small>EXTERNO</small>
                  <h3>Fachada Alphaville</h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <CropImage src="4f8be.png" className="quote-mark" alt="" />
          <blockquote>
            “A D.LUZ entende a luz como parte da arquitetura. O projeto luminotécnico e a curadoria
            das peças elevaram completamente o resultado final da obra.”
          </blockquote>
          <div className="testimonial-author">
            <CropImage src="4f8be.png" className="author-photo" alt="Marina Albuquerque" />
            <span>
              <b>Marina Albuquerque</b>
              <small>Arquiteta · Albuquerque Studio</small>
            </span>
          </div>
        </section>

        <section className="faq-section" id="duvidas">
          <div className="page-shell faq-grid">
            <div>
              <span className="section-eyebrow">DÚVIDAS</span>
              <h2>Perguntas frequentes</h2>
              <p>Não encontrou o que procurava? Nossa equipe responde em minutos.</p>
            </div>
            <div className="faq-list">
              <details open>
                <summary>Vocês fazem o projeto luminotécnico completo?</summary>
                <p>
                  Sim. Desenvolvemos o projeto, a especificação dos produtos e a simulação do
                  resultado.
                </p>
              </details>
              {[
                "Atendem arquitetos e construtoras?",
                "Entregam para todo o Brasil?",
                "Qual é a garantia dos produtos?",
              ].map((question) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>Fale com nossa equipe para receber as condições ideais para o seu projeto.</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactBanner mode="lighting" />
      </main>
      <Footer mode="lighting" onChange={onChange} />
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  link,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  link?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-intro ${centered ? "centered" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {link && (
        <a href="#orcamento">
          {link} <Arrow />
        </a>
      )}
    </div>
  );
}

function ElectricalSite({ onChange }: { onChange: (mode: SiteMode) => void }) {
  const categories = ["Fios e Cabos", "Disjuntores e Proteção", "Tomadas e Interruptores"];
  const products = [
    ["Cabo Flexível 2,5mm²", "Rolo 100m · 750V", "Mais vendido"],
    ["Disjuntor DIN Bipolar 32A", "Curva C · 5kA", "Novo"],
    ["Tomada 20A Linha Prime", "2P+T · 250V", ""],
    ["DPS Classe II 20kA", "275V · Contra surtos", ""],
  ];
  return (
    <div className="electrical-site" id="top">
      <Header mode="electrical" onChange={onChange} />
      <main>
        <section className="electrical-hero">
          <div className="electrical-shell hero-grid">
            <div className="hero-copy">
              <div className="electrical-pill">
                <b>Novo</b> Atendimento emergencial 24h <Arrow />
              </div>
              <h1>
                Energia segura
                <br />
                para cada <em>projeto.</em>
              </h1>
              <p>
                Materiais elétricos de procedência, projetos e instalações executados por
                eletricistas certificados. Do quadro de distribuição à última tomada.
              </p>
              <div className="button-row">
                <a className="btn btn-black" href="#produtos">
                  Ver materiais <Arrow />
                </a>
                <a className="btn btn-light-outline" href="#orcamento">
                  Chamar eletricista
                </a>
              </div>
              <div className="electrical-metrics">
                <div>
                  <strong>+15 mil</strong>
                  <span>itens em estoque</span>
                </div>
                <div>
                  <strong>24h</strong>
                  <span>entrega e plantão</span>
                </div>
                <div>
                  <strong>NR-10</strong>
                  <span>equipe certificada</span>
                </div>
              </div>
            </div>
            <div className="electric-visual" aria-label="Montagem de quadro elétrico">
              <div className="cert-card">
                <b>100% INMETRO</b>
                <span>Materiais certificados</span>
              </div>
              <div className="electric-symbol">
                <span />
                <i />
              </div>
              <div className="electric-caption">
                <b>RAIO</b>
                <div>
                  <small>MONTAGEM DE QUADROS</small>
                  <strong>Projeto residencial · 24 circuitos</strong>
                </div>
                <span>↗</span>
              </div>
            </div>
          </div>
        </section>

        <div className="yellow-benefits">
          {["Eletricistas NR-10", "Produtos INMETRO", "Entrega em até 24h", "Projetos com ART"].map(
            (item) => (
              <span key={item}>
                <i /> {item}
              </span>
            ),
          )}
        </div>

        <section className="cream-section" id="produtos">
          <div className="electrical-shell">
            <SectionIntro
              eyebrow="MATERIAIS ELÉTRICOS"
              title="Tudo para sua instalação"
              description="Das marcas mais confiáveis do mercado, com estoque pronto para obras residenciais, comerciais e industriais."
              link="Ver catálogo completo"
            />
            <div className="electric-categories">
              {categories.map((name, index) => (
                <article key={name}>
                  <div className={`abstract-product abstract-${index + 1}`}>
                    <span />
                    <i />
                  </div>
                  <div>
                    <h3>{name}</h3>
                    <p>{[320, 185, 410][index]} itens</p>
                  </div>
                  <b>↗</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sand-section">
          <div className="electrical-shell">
            <SectionIntro eyebrow="DESTAQUES" title="Os mais pedidos da semana" />
            <div className="electric-products">
              {products.map(([name, specs, badge], index) => (
                <article key={name}>
                  <div className="electric-product-shot">
                    {badge && <b>{badge}</b>}
                    <span className={`product-shape shape-${index + 1}`} />
                  </div>
                  <small>{["FIOS E CABOS", "PROTEÇÃO", "TOMADAS", "PROTEÇÃO"][index]}</small>
                  <h3>{name}</h3>
                  <p>{specs}</p>
                  <footer>
                    <i />
                    <i />
                    <i />
                    <a href="#orcamento">
                      Orçar <Arrow />
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cream-section solution-section" id="solucoes">
          <div className="electrical-shell">
            <SectionIntro
              eyebrow="SOLUÇÕES"
              title="O atendimento certo para sua obra"
              description="Compare nossos pacotes de serviço e escolha o que se encaixa no seu projeto."
              centered
            />
            <div className="solution-cards">
              {[
                [
                  "Residencial",
                  "Instalações novas, reformas e adequações para casas e apartamentos.",
                  "Agendar visita",
                ],
                [
                  "Predial e Comercial",
                  "Projetos completos para lojas, escritórios, condomínios e construtoras.",
                  "Solicitar proposta",
                ],
                [
                  "Industrial",
                  "Média tensão, painéis de comando e eficiência energética.",
                  "Falar com engenheiro",
                ],
              ].map(([title, text, cta], index) => (
                <article className={index === 1 ? "featured" : ""} key={title}>
                  <span className="solution-icon">{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <strong>
                    {index === 0
                      ? "Visita gratuita"
                      : index === 1
                        ? "Em até 48h"
                        : "Atendimento dedicado"}
                  </strong>
                  <a href="#orcamento">{cta}</a>
                  <ul>
                    <li>Equipe certificada</li>
                    <li>Materiais de procedência</li>
                    <li>Garantia do serviço</li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="calculator-section" id="calculadora">
          <div className="electrical-shell calculator-grid">
            <div>
              <span className="section-eyebrow">FERRAMENTA GRATUITA</span>
              <h2>Qual cabo e disjuntor usar no seu circuito?</h2>
              <p>
                Informe a potência do equipamento e a tensão da rede. A calculadora indica a bitola
                mínima recomendada.
              </p>
              <div className="appliance-row">
                {["Chuveiro 5.500W", "Ar 12.000 BTU", "Cooktop 7.000W"].map((item) => (
                  <button key={item}>{item}</button>
                ))}
              </div>
            </div>
            <div className="calculator-card">
              <div className="voltage">
                <span>Tensão da rede</span>
                <button>127V</button>
                <button className="active">220V</button>
              </div>
              <label>
                Potência do equipamento
                <strong>5.500 W</strong>
              </label>
              <input
                type="range"
                min="500"
                max="12000"
                defaultValue="5500"
                aria-label="Potência do equipamento"
              />
              <div className="calculation-results">
                <div>
                  <small>CORRENTE</small>
                  <strong>25,0 A</strong>
                </div>
                <div className="active">
                  <small>CABO MÍNIMO</small>
                  <strong>4 mm²</strong>
                </div>
                <div>
                  <small>DISJUNTOR</small>
                  <strong>25 A</strong>
                </div>
              </div>
              <a href="#orcamento">
                Orçar estes materiais <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="cream-section labor-section" id="servicos">
          <div className="electrical-shell">
            <SectionIntro
              eyebrow="SERVIÇOS"
              title="Mão de obra especializada"
              description="Equipe própria, uniformizada e certificada em NR-10, seguindo as normas da NBR 5410."
            />
            <div className="labor-grid">
              {[
                ["Instalações elétricas", "Instalação completa em obras novas e reformas."],
                ["Projetos elétricos e ART", "Dimensionamento de cargas e aprovação."],
                ["Montagem de quadros", "Quadros de distribuição com identificação."],
                ["Manutenção preventiva", "Inspeções programadas e correções."],
                ["Laudos e SPDA", "Laudos técnicos e aterramento."],
                ["Plantão emergencial 24h", "Atendimento rápido para sua segurança."],
              ].map(([title, text], index) => (
                <article className={index === 5 ? "featured" : ""} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {index === 5 && (
                    <a href="#orcamento">
                      Chamar agora <Arrow />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sand-section works-section">
          <div className="electrical-shell">
            <SectionIntro
              eyebrow="PORTFÓLIO"
              title="Obras que energizamos"
              link="Ver todas as obras"
            />
            <div className="works-grid">
              <article className="large">
                <div className="wire-art" />
                <span>Predial</span>
                <h3>Edifício Horizonte · 64 unidades</h3>
              </article>
              <article>
                <div className="wire-art small" />
                <span>Solar</span>
                <h3>Residência 8,2 kWp</h3>
              </article>
              <article>
                <div className="wire-art small second" />
                <span>Comercial</span>
                <h3>Painel Loja Centro</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="cream-section electrical-faq" id="duvidas">
          <div className="electrical-shell faq-grid">
            <div>
              <span className="section-eyebrow">DÚVIDAS</span>
              <h2>Perguntas frequentes</h2>
              <p>Não encontrou sua resposta? Fale com um técnico.</p>
            </div>
            <div className="faq-list">
              <details open>
                <summary>A visita técnica é cobrada?</summary>
                <p>
                  Não. A visita para levantamento e orçamento é gratuita na região metropolitana.
                </p>
              </details>
              {[
                "Vocês vendem materiais para quem não contrata o serviço?",
                "Emitem ART e laudo técnico?",
                "Como funciona o plantão 24h?",
              ].map((question) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>Nossa equipe avalia cada necessidade e apresenta a solução adequada.</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactBanner mode="electrical" />
      </main>
      <Footer mode="electrical" onChange={onChange} />
    </div>
  );
}

function ContactBanner({ mode }: { mode: SiteMode }) {
  const lighting = mode === "lighting";
  return (
    <section
      className={`contact-section ${lighting ? "contact-dark" : "contact-warm"}`}
      id="orcamento"
    >
      <div className="contact-banner">
        <div>
          <span className="contact-icon">{lighting ? "L" : "R"}</span>
          <h2>
            {lighting
              ? "Vamos iluminar o seu próximo projeto?"
              : "Precisa de material ou de um eletricista?"}
          </h2>
          <p>
            {lighting
              ? "Envie sua planta ou conte sobre o ambiente. Retornamos com sugestões e orçamento."
              : "Envie sua lista de materiais ou descreva o serviço. Respondemos em poucas horas."}
          </p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <input aria-label="Seu nome" placeholder="Seu nome" />
            <input aria-label="WhatsApp" placeholder="WhatsApp" inputMode="tel" />
          </div>
          <select aria-label="Tipo de projeto" defaultValue="">
            <option value="" disabled>
              O que você precisa?
            </option>
            <option>Orçamento de produtos</option>
            <option>Projeto completo</option>
            <option>Visita técnica</option>
          </select>
          <div>
            <button type="submit">Solicitar orçamento</button>
            <a href="https://wa.me/551140005678">
              <span className="whatsapp-icon">
                <CropImage src="ef704.png" className="whatsapp-crop" alt="" />
              </span>
              WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer({ mode, onChange }: { mode: SiteMode; onChange: (mode: SiteMode) => void }) {
  return (
    <footer className={`footer ${mode === "lighting" ? "dark-footer" : "light-footer"}`}>
      <div className="footer-grid">
        <div>
          <Brand mode={mode} />
          <p>
            {mode === "lighting"
              ? "Luminárias de design e soluções completas em iluminação."
              : "Materiais elétricos e serviços técnicos com segurança e qualidade."}
          </p>
        </div>
        <div>
          <b>Produtos</b>
          <a href="#produtos">Catálogo</a>
          <a href="#produtos">Destaques</a>
          <a href="#orcamento">Orçamento</a>
        </div>
        <div>
          <b>Empresa</b>
          <a href="#servicos">Serviços</a>
          <a href="#ambientes">Portfólio</a>
          <a href="#duvidas">Dúvidas</a>
        </div>
        <div>
          <b>Dois sites, uma D.LUZ</b>
          <SiteSwitch mode={mode} onChange={onChange} />
        </div>
      </div>
      <div className="footer-legal">© 2026 D.LUZ. Todos os direitos reservados.</div>
    </footer>
  );
}

export default function App() {
  const [mode, setMode] = useState<SiteMode>(() =>
    window.location.hash.startsWith("#eletrica") ? "electrical" : "lighting",
  );

  const changeMode = (next: SiteMode) => {
    setMode(next);
    window.history.replaceState(null, "", next === "electrical" ? "#eletrica" : "#iluminacao");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title = mode === "lighting" ? "D.LUZ Iluminação" : "D.LUZ Elétrica";
  }, [mode]);

  return mode === "lighting" ? (
    <LightingSite onChange={changeMode} />
  ) : (
    <ElectricalSite onChange={changeMode} />
  );
}
