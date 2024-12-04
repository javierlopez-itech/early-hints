<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\WebLink\Link;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;

class HomeController extends AbstractController
{
    public function __construct(private readonly EntrypointLookupInterface $entrypointLookup){
    }

    #[Route('/early-hints', name: 'early_hints')]
    public function earlyHints()
    {
        $links = [];
        foreach($this->entrypointLookup->getJavaScriptFiles('app') as $jsFile) {
            $links[] = (new Link(rel: 'preload', href: $jsFile))->withAttribute('as', 'script');
        }
        foreach($this->entrypointLookup->getCssFiles('app') as $cssFile) {
            $links[] = (new Link(rel: 'preload', href: $cssFile))->withAttribute('as', 'style');
        }

        $this->entrypointLookup->reset();
        $response = $this->sendEarlyHints($links);

        sleep(1);
        return $this->render('home/index.html.twig', response: $response);
    }

    #[Route('/header-hints', name: 'header_hints')]
    public function headerHints(Request $request): Response
    {
        foreach($this->entrypointLookup->getJavaScriptFiles('app') as $jsFile) {
            $this->addLink($request, (new Link(rel: 'preload', href: $jsFile))->withAttribute('as', 'script'));
        }
        foreach($this->entrypointLookup->getCssFiles('app') as $cssFile) {
            $this->addLink($request, (new Link(rel: 'preload', href: $cssFile))->withAttribute('as', 'style'));
        }
        $this->entrypointLookup->reset();

        sleep(1);
        return $this->render('home/index.html.twig');
    }


    #[Route('/no-hints', name: 'no_hints')]
    public function noHints()
    {
        sleep(1);
        return $this->render('home/index.html.twig');
    }
}
