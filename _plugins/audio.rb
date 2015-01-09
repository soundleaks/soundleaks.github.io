module Jekyll
  class RenderAudioTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @url, *@val= text.split(/ /)
    end

    def render(context)
      "<div class='audio'><audio src=\"#{@url}\" controls></audio></div>"
    end
  end
end

Liquid::Template.register_tag('audio', Jekyll::RenderAudioTag)
