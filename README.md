# 🏛️ Transparência Valinhos - Monitor de Despesas do Legislativo

> **Civic Tech & Auditoria Cidadã:** Plataforma moderna e pública para monitorar, fiscalizar e auditar as despesas, notas fiscais e empenhos da **Câmara Municipal de Valinhos/SP** (Legislatura 2025–2028).

---

## 🌟 Visão Geral & Funcionalidades

- **Raio-X de Cada Vereador:** Página individual (`/vereador/[id]`) com perfil político, biografia, gabinete, média de gastos, linha do tempo e fornecedores credores.
- **Espelho Oficial de Notas Fiscais:** Modal interativo com visualizador estilo DANFE/NFS-e, carimbo de autenticidade, chave de acesso de 44 dígitos, itens discriminados, número de empenho/liquidação e opção de impressão.
- **Painel de Concentração de Fornecedores:** Alerta inteligente que detecta empresas com repasses concentrados entre múltiplos gabinetes.
- **Gráficos Interativos (Recharts):** Gráficos de rosca/pizza de categorias de gastos e barras dos parlamentares com maiores valores acumulados.
- **Filtros Dinâmicos & Exportação:** Busca textual por fornecedor/CNPJ, filtros por categoria de gasto e botão de exportação em CSV para cientistas de dados e jornalistas.
- **API REST Aberta:** Endpoint `/api/despesas` com suporte a paginação e parâmetros de consulta.

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Estilização:** Tailwind CSS (tema customizado cívico)
- **Visualização:** Recharts + Lucide-react
- **Camada de Resiliência:** Padrão Provider/Service com flag `NEXT_PUBLIC_USE_MOCK=true` para garantir 100% de disponibilidade no deploy inicial na Vercel, e módulo de scraping para portais municipais e TCE-SP.

---

## 🚀 Como Executar Localmente

### 1. Clonar e Instalar Dependências
```bash
git clone <repo-url>
cd appPubli
npm install
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` (ou utilize o `.env.example` fornecido):
```env
NEXT_PUBLIC_USE_MOCK=true
NEXT_PUBLIC_CAMARA_URL=https://www.camaravalinhos.sp.gov.br
NEXT_PUBLIC_TRANSPARENCIA_URL=https://transparencia-camaravalinhos.smarapd.com.br
NEXT_PUBLIC_TCE_URL=https://www4.tce.sp.gov.br
SCRAPER_TIMEOUT_MS=15000
```

### 3. Rodar em Modo de Desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ☁️ Deploy Imediato na Vercel

### Opção A: Via Vercel CLI (Recomendado - 2 minutos)
```bash
# 1. Instale a CLI da Vercel (se ainda não tiver)
npm i -g vercel

# 2. Faça o login
vercel login

# 3. Realize o deploy de produção
vercel --prod
```

### Opção B: Via GitHub / GitLab
1. Inicialize o repositório git e faça o push:
   ```bash
   git init
   git add .
   git commit -m "feat: MVP Transparência Câmara de Valinhos"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/valinhos-transparencia.git
   git push -u origin main
   ```
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Importe o repositório.
4. Adicione a variável de ambiente:
   - `NEXT_PUBLIC_USE_MOCK` = `true`
5. Clique em **Deploy**.

---

## ⚖️ Conformidade Legal & Dados Abertos
Esta plataforma foi desenvolvida em conformidade com:
- **Lei Federal nº 12.527/2011** (Lei de Acesso à Informação - LAI)
- **Lei Complementar nº 131/2009** (Lei da Transparência)
- **Lei nº 14.129/2021** (Governo Digital e Abertura de Dados Públicos)
