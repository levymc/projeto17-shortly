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
-- Name: links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.links (
    id integer NOT NULL,
    url character varying NOT NULL,
    shorturl character varying,
    views integer,
    createdat date
);


ALTER TABLE public.links OWNER TO postgres;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.links_id_seq OWNER TO postgres;

--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: logAccess; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."logAccess" (
    id integer NOT NULL,
    userid integer,
    token character varying NOT NULL,
    createdat timestamp without time zone,
    valid boolean
);


ALTER TABLE public."logAccess" OWNER TO postgres;

--
-- Name: logaccess_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logaccess_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.logaccess_id_seq OWNER TO postgres;

--
-- Name: logaccess_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logaccess_id_seq OWNED BY public."logAccess".id;


--
-- Name: userLink; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."userLink" (
    id integer NOT NULL,
    userid integer NOT NULL,
    linkid integer NOT NULL,
    linkscount integer,
    visitcount integer,
    "createdAt" timestamp without time zone
);


ALTER TABLE public."userLink" OWNER TO postgres;

--
-- Name: userlink_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.userlink_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.userlink_id_seq OWNER TO postgres;

--
-- Name: userlink_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.userlink_id_seq OWNED BY public."userLink".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    password character varying NOT NULL,
    email character varying NOT NULL,
    "createdAt" timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: logAccess id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."logAccess" ALTER COLUMN id SET DEFAULT nextval('public.logaccess_id_seq'::regclass);


--
-- Name: userLink id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userLink" ALTER COLUMN id SET DEFAULT nextval('public.userlink_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.links (id, url, shorturl, views, createdat) FROM stdin;
\.


--
-- Data for Name: logAccess; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."logAccess" (id, userid, token, createdat, valid) FROM stdin;
\.


--
-- Data for Name: userLink; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."userLink" (id, userid, linkid, linkscount, visitcount, "createdAt") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, password, email, "createdAt") FROM stdin;
2	João	$2b$10$zK9ail9PKuHVr5dg8X0ucepkZfCHhuSqbZ85OTkLzionOVwRHPsv2	joao@driven.com.br	\N
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.links_id_seq', 1, false);


--
-- Name: logaccess_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.logaccess_id_seq', 1, false);


--
-- Name: userlink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.userlink_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: logAccess logaccess_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."logAccess"
    ADD CONSTRAINT logaccess_pkey PRIMARY KEY (id);


--
-- Name: userLink userlink_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userLink"
    ADD CONSTRAINT userlink_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: logAccess logaccess_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."logAccess"
    ADD CONSTRAINT logaccess_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: userLink userlink_linkid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userLink"
    ADD CONSTRAINT userlink_linkid_fkey FOREIGN KEY (linkid) REFERENCES public.links(id);


--
-- Name: userLink userlink_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userLink"
    ADD CONSTRAINT userlink_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

