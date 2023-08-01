--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Ubuntu 15.3-1.pgdg23.04+1)
-- Dumped by pg_dump version 15.3 (Ubuntu 15.3-1.pgdg23.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    url character varying NOT NULL,
    "shortUrl" character varying,
    views integer,
    "createdAt" timestamp without time zone
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: logAccess; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."logAccess" (
    id integer NOT NULL,
    "userId" integer,
    token character varying NOT NULL,
    "createdAt" timestamp without time zone,
    valid boolean
);


--
-- Name: logaccess_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.logaccess_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: logaccess_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.logaccess_id_seq OWNED BY public."logAccess".id;


--
-- Name: userLink; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."userLink" (
    id integer NOT NULL,
    userid integer NOT NULL,
    linkid integer NOT NULL,
    linkscount integer,
    visitcount integer,
    "createdAt" timestamp without time zone
);


--
-- Name: userlink_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.userlink_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userlink_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.userlink_id_seq OWNED BY public."userLink".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    password character varying NOT NULL,
    email character varying NOT NULL,
    "createdAt" timestamp without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: logAccess id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."logAccess" ALTER COLUMN id SET DEFAULT nextval('public.logaccess_id_seq'::regclass);


--
-- Name: userLink id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userLink" ALTER COLUMN id SET DEFAULT nextval('public.userlink_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (1, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-34ff4484a1274eed901c5a2bd1e23722', 'bd8235a0', NULL, NULL);
INSERT INTO public.links VALUES (2, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-34ff4484a1274eed901c5a2bd1e23722', 'dUJ40NY3z4', NULL, '2023-08-01 00:00:00');
INSERT INTO public.links VALUES (3, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-34ff4484a1274eed901c5a2bd1e23722', 'yFT2cFPYKe', NULL, '2023-08-01 00:00:00');
INSERT INTO public.links VALUES (4, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-34ff4484a1274eed901c5a2bd1e23722', 'ldzsopGSg6', NULL, '2023-08-01 00:00:00');
INSERT INTO public.links VALUES (5, 'https://www.notion.so/bootcampra/Projeto-17-Shortly-API-34ff4484a1274eed901c5a2bd1e23722', '4VzdeK8Azt', NULL, '2023-08-01 00:00:00');


--
-- Data for Name: logAccess; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."logAccess" VALUES (7, 1, 'eaadb706-304f-40e5-8388-b71888dbfafc', '2023-08-01 00:00:00', true);
INSERT INTO public."logAccess" VALUES (6, 1, '460d914f-2000-4330-a2ff-1dbbd55a6509', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (3, 1, 'c88a8858-b39a-422b-96dc-3735d4475460', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (2, 1, '865d9a3a-5e96-4949-a85e-6a24c9426f4b', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (1, 1, '2e06f874-99db-40cc-83d6-7296c4550978', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (4, 1, '8dacb5e7-75d2-4094-a3a8-d832161dec0f', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (5, 1, '5cfa47ea-625c-45ee-a0b7-85669c0e75b2', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (11, 3, '11997e0f-f495-4ecf-9271-33c4242adb8c', '2023-08-01 19:08:18', true);
INSERT INTO public."logAccess" VALUES (10, 3, '87a0dd34-d6e0-42cb-85f3-7d38b11d0e88', '2023-08-01 19:08:00', false);
INSERT INTO public."logAccess" VALUES (9, 3, '7e7882ce-5265-4aee-89d0-3b77030726e3', '2023-08-01 00:00:00', false);
INSERT INTO public."logAccess" VALUES (8, 3, '4a4e3011-ba49-4a08-81ac-737168d904c8', '2023-08-01 00:00:00', false);


--
-- Data for Name: userLink; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', '$2b$10$zK9ail9PKuHVr5dg8X0ucepkZfCHhuSqbZ85OTkLzionOVwRHPsv2', 'joao@driven.com.br', '2023-08-01 20:08:26');
INSERT INTO public.users VALUES (3, 'Levy', '$2b$10$Gp4Fregq5JRinzCJos5ae.1L9g2Yt3W37e0jupyWrO2XLtf6yi17q', 'levy@gmail.com.br', '2023-08-01 20:08:26');
INSERT INTO public.users VALUES (4, 'Frederico da Silva Barbosa', '$2b$10$69hocaZEIAA4mOY9h.pcme4QTc.g920d1SAJpHdAn4ZPUSk9DPTJC', 'fred@gmail.com.br', '2023-08-01 20:08:26');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 5, true);


--
-- Name: logaccess_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.logaccess_id_seq', 11, true);


--
-- Name: userlink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.userlink_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: logAccess logaccess_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."logAccess"
    ADD CONSTRAINT logaccess_pkey PRIMARY KEY (id);


--
-- Name: userLink userlink_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userLink"
    ADD CONSTRAINT userlink_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: logAccess logaccess_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."logAccess"
    ADD CONSTRAINT logaccess_userid_fkey FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: userLink userlink_linkid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userLink"
    ADD CONSTRAINT userlink_linkid_fkey FOREIGN KEY (linkid) REFERENCES public.links(id);


--
-- Name: userLink userlink_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userLink"
    ADD CONSTRAINT userlink_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

