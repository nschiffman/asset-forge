# AssetForge Prompt Pipeline

## Prompt 1: Transcript Cleanup

Goal:
Convert raw transcript into clean source material while preserving meaning.

Output:
- Cleaned transcript
- Removed filler
- Removed housekeeping
- Preserved technical claims
- Separated Q&A

## Prompt 2: Concept Extraction

Goal:
Extract durable concepts from the cleaned transcript.

Output JSON:
- core_claims
- pain_points
- solutions
- examples
- frameworks
- signature_phrases
- repeated_themes
- unresolved_gaps

## Prompt 3: Concept Clustering

Goal:
Group concepts into thematic clusters.

Output JSON:
- cluster_name
- cluster_purpose
- included_concepts
- evidence_from_source
- recommended_asset_use

## Prompt 4: Deduplication

Goal:
Merge repeated ideas and preserve the strongest formulation.

Output JSON:
- retained_concept
- merged_variants
- best_source_evidence
- editorial_note

## Prompt 5: Chapter Architecture

Goal:
Create a table of contents for the selected output.

Output JSON:
- title
- subtitle
- audience
- thesis
- chapters
- section_goals
- missing_context_needed

## Prompt 6: Draft Generation

Goal:
Generate the selected asset in the chosen tone.

Constraints:
- No generic AI filler
- Preserve expert specificity
- Use logical transitions
- Use clear section headings
- Maintain commercial usefulness

## Prompt 7: Editorial Critique

Goal:
Critique the draft before final output.

Check:
- Repetition
- Narrative gaps
- Tone mismatch
- Weak claims
- Missing examples
- Overgeneralization
- Unclear buyer value

## Prompt 8: Revision

Goal:
Apply critique and produce final structured export.

Output:
- Markdown
- Suggested title
- Suggested subtitle
- Executive summary
- Asset pack recommendations
